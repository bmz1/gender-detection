import male from './genders/male'
import female from './genders/female'

export enum Gender {
  UNISEX = 'unisex',
  MALE = 'male',
  FEMALE = 'female',
  UNKNOWN = 'unknown'
}

function getGender(firstName: string, lang?: string): string {
  if (
    lang &&
    male[firstName] &&
    male[firstName][lang] &&
    female[firstName] &&
    female[firstName][lang]
  ) {
    return Gender.UNISEX
  } else if (lang && male[firstName] && male[firstName][lang]) {
    return Gender.MALE
  } else if (lang && female[firstName] && female[firstName][lang]) {
    return Gender.FEMALE
  } else if (male[firstName] && female[firstName]) {
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

function detect(fullName: string, lang?: string): string {
  const firstName = getFirstNameFromFullName(fullName)
  const resgender = getGender(firstName, lang)
  return resgender
}

export default {
  detect,
  getFirstName: getFirstNameFromFullName
}
