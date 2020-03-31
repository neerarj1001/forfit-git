export default{
    data() {
        return{
            genericRules: {
                requiredRule:[ v => !!v && /\S/.test(v) || 'Required.'],
                minRule:[ v => (v && v.length >= 4) || 'Min 4 characters'],
                minLongRule:[ v => (v && v.length >= 12) || 'Min 12 characters'],
                passwordRule: [
                    v => !!v || 'Password is required.',
                   v => (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v)) || 'Password must be atleast 8 charaters long and contain atleast one letter, number and special character'
                   
                ],
                emailRules: [
                    v => !!v && /\S/.test(v) || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                mobileRule: [
                    v => !!v && /\S/.test(v) || 'Mobile number is required',
                    v => /^\d{10}$/.test(v) || 'mobile number must be valid'
                ],
                pincodeRule: [
                    v => !!v && /\S/.test(v) || 'Pincode is required',
                    v => /^\d{6}$/.test(v) || 'Pincode must be valid'
                ],
                aadharRule: [
                    v => !!v && /\S/.test(v) || 'AAdhar number is required',
                    v => /^\d{12}$/.test(v) || 'Aadhar number must be valid'
                ],
                accountnoRule: [
                    v => !!v && /\S/.test(v) || 'Account number is required',
                    v =>/^\d{0,20}$/.test(v) || 'Account number must be valid',
                ],
                ifscRules: [
                    v => !!v && /\S/.test(v) || 'IFSC-code is required',
                    v => /[A-Z|a-z]{4}[0][\d]{6}/.test(v) || 'IFSC-code must be valid',
                ],
                panRules: [
                    v => !!v && /\S/.test(v) || 'PAN is required',
                    v => /[A-Z|a-z]{5}[\d]{4}[A-Z|a-z]/.test(v) || 'PAN must be valid',
                ],
                gstRules: [
                    v => !!v && /\S/.test(v) || 'GST is required',
                    v => /[\d]{2}[A-Z|a-z]{5}[\d]{4}[A-Z|a-z][\d][Z|z][A-Z|a-z|\d]/.test(v) || 'GST must be valid',
                ]
            }
        }
    },
    computed:{
        confirmPasswordRule() {
            const confirmPasswordRule = []

            if (this.password) {
                const rule = v => (!!v && v) === this.password || 'Values do not match'
                confirmPasswordRule.push(rule)
              }
            return confirmPasswordRule
        }
    }
}