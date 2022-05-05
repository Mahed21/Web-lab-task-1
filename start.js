function formValidation()
        {
          
           
           /* validation of first name last name */
           const firstName=document.getElementById("fname").value;
            const lastName=document.getElementById("lname").value;
            const fullName=firstName + lastName;
            const regaxName=/[a-zA-z._]/g
            //console.log(fullName.match(regaxName).join(''))
            if(fullName.match(regaxName)?.join('')==fullName)
            {
                // number validate
            const number = document.getElementById('mobile').value;
            const regaxNumber=/(\+88)?-?01[3-9][0-9]{8}/g
            //console.log(number.match(regaxNumber)?.join(''))
            if(number.match(regaxNumber)?.join('')==number)
            {
                const pass=document.getElementById('pass').value;
                const pass1=document.getElementById('confirm-pass').value;
            if(pass==pass1)
           {
              const regpass=/.*[0-9].*/g
            if(pass.match(regpass)?.join('')==pass)
            {
                alert('Succesfully Registerd')

            }
            else
            {
                alert('Pass Should be strong')
            }
        }
            }
            else
            {
                alert('number should be 11 digit and it should be bangladeshi operator')
            }
        
            }
            else
            {
                alert('Name Should be character')
            }
          
       
        //passvalidate
        

        }