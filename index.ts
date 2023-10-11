import male from './genders/male'
import female from './genders/female'

export enum Gender {
  UNISEX = 'unisex',
  MALE = 'male',
  FEMALE = 'female',
  UNKNOWN = 'unknown'
}

function getGender(firstName: string, options?: DetectionOptions): string {
  if (male[firstName] && female[firstName]) {
    if (options?.useCount) {
      return (male[firstName].count > female[firstName].count) ? Gender.MALE : Gender.FEMALE
    }

    if (options?.useProbability) {
      return (male[firstName].probability > female[firstName].probability) ? Gender.MALE : Gender.FEMALE
    }
    return Gender.UNISEX
  } else if (male[firstName]) {
    return Gender.MALE
  } else if (female[firstName]) {
    return Gender.FEMALE
  }
  return Gender.UNKNOWN
}

function getFirstNameFromFullName(fullName: string): string {
  return fullName
    .toLowerCase()
    .replace(/^\s+|^0-9+|[^a-z-úñäâàáéèëêïîöôùüûœç\- ]+/g, '')
    .split(/\s/)[0]
}

interface DetectionOptions {
  useProbability?: boolean
  useCount?: boolean
}

function detect(fullName: string, options?: DetectionOptions): string {
  const firstName = getFirstNameFromFullName(fullName)
  const resgender = getGender(firstName, options)
  return resgender
}

export default {
  detect,
  getFirstName: getFirstNameFromFullName
}
