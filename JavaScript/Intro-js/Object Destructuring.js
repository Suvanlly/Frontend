const address = {
  street: '',
  city: '',
  country: ''
}

const street = address.street
const city = address.city
const country = address.country

// with object destructuring we can simply the above three line in one line
const { street, city, country } = address