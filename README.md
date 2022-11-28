# PasswordGenerator
Javascript starter project - presenting a series of prompts for user to specify password criteria before validating and generating a password fitting the chosen criteria.


## Description

User is prompted to provide various password criteria:
    - password length
    - if special char set to be included
    - if numerical char set to be included
    - if lower case chars to be included
    - if upper case chars to be included
    
Once user input has been validated, a password is randonly generated to meet the user's chosen criteria.




Validation includes
    - ensuring password length is between 10-64 chars long
    - at least one char type set is chosen
    

The landing page is updated to display the generated password.


The basic program makes  use of use:

- html and css (minimal)
- basic javascript



## Usage
Live app can be found at https://ateki.github.io/PasswordGenerator


### Home page
The following page will be displayed. <br>
<img src=assets/images/home_password_gen.png alt="Home Screen"  width="400" style=" margin-right: 10px; border: 2px solid #555;"  />


## Screenshots
From the main page,  a series of simple javascript prompt/confirm popups will request the user's password criteria, starting with password length prompt.<br>
<img src=assets/images/prompt_password_length.png alt="Password length prompt" width="400" style=" margin-right: 10px; border: 2px solid #555;" /> <br>
The user is then taken through a number of simple javascript popups to determine their password criteria to confirm whether or not various char set types have to be included in password.
<ul>
<li><img src=assets/images/confirm_include_special_chars.png alt="Special chars confirmation popup" width="400" style=" margin-right: 10px; border: 2px solid #555;" /></li>
<li><img src=assets/images/confirm_include_numerical.png alt="Numerical char confirmation popup"  width="400" style=" margin-right: 10px; border: 2px solid #555;" /></li>
<li><img src=assets/images/confirm_include_lower_case.png alt="Lower case char confirmation popup" " width="400" style=" margin-right: 10px; border: 2px solid #555;" /></li>
<li><img src=assets/images/confirm_include_upper_case.png alt="Upper case char confirmation popup" " width="400" style=" margin-right: 10px; border: 2px solid #555;" /></li>
</ul>
The password is finally displayed on the original home page.




## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).



