  const passwordValidation1 = (password) => {
      if (password.length > 7) {
          return 'Strong';
      } else {
          return 'Weak';
     }
 }
 console.log(passwordValidation1('237423uzdjhfwg'))

 const passwordValidation2 = (password) => password.length > 7 ? console.log('Strong') : console.log('Weak');
 passwordValidation2('2')

const passwordValidation3 = (password) => {
    password.length > 7 && /[A-Z]/.test(password) ? console.log('Very Strong') : password.length > 7 ? console.log('Strong') : console.log('Weak');
    }
passwordValidation3('2AAAAAAA')

