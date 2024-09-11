import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleAndFacebookLogin from "../../Components/Button/GoogleAndFacebookLogin/GoogleAndFacebookLogin";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { MuiTelInput } from 'mui-tel-input';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

//   phone number handel
  //   const handlePhoneChange = (newPhone) => {
  //   setPhone(newPhone)
  // }

  // button loading

function handleClick() {
    setLoading(true);
  }

const handleLogin = (event) => {
  event.preventDefault();
  
  const first_Name = firstName || '';
  const last_Name = lastName || '';
  const newEmail = email || '';
  const newPassword = password || '';
  const phoneNumber = phone || '';
  console.log(first_Name, last_Name, newEmail, newPassword, phoneNumber);
  
  // navigate(from);
  // setLoading(false);
  
};
  
  return (
    <div className="mt-16 max-w-sm mx-auto">
        <div className="text-center mb-4">
            <span className="bg-primary p-3 pb-4 rounded-full items-center text-white"><LockOutlinedIcon/></span>
            <h3 className="text-2xl font-semibold mt-4">Sign Up</h3>
            <p>Welcome user, please sign in to continue</p>
        </div>
        {/* google facebook button */}
        <div>
            <GoogleAndFacebookLogin/>
        </div>
        {/* or */}
        <div className="border-b text-center items-center max-w-xs mx-auto mb-6">
        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
          Or
        </div>
      </div>
      {/* input field */}
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto max-h-[100-60vh]">
        <form onSubmit={handleLogin} className="">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <TextField
              onChange={(e)=> setFirstName(e.target.value)}
                id="outlined-first-name-input"
                label="First Name"
                type="text"
                autoComplete="current-first-name"
                required
                size="small"
                fullWidth
              />
              <TextField
              onChange={(e)=> setLastName(e.target.value)}
                id="outlined-last-name-input"
                label="Last Name"
                type="text"
                autoComplete="current-last-name"
                required
                size="small"
                fullWidth
              />
            </div>
            <div>
              <TextField
              onChange={(e)=> setEmail(e.target.value)}
                className=""
                id="outlined-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                required
                size="small"
                fullWidth
              />
            </div>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password"
              size="small"
              >
                Password
              </InputLabel>
              <OutlinedInput
              onChange={(e)=> setPassword(e.target.value)}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                size="small"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <div className="mt-4">
          <MuiTelInput 
          value={phone}
          defaultCountry="BD"
          required
          size="small"
          fullWidth
          onChange={(newPhone) => setPhone(newPhone)} />
          </div>

          <div className="form-control mt-6">
          <LoadingButton
          size="small"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          onClick={handleClick}
          type="submit"
        >
          Send
        </LoadingButton>
          </div>
          <p className="text-center text-lg">
            {/* <SocialLogin/> */}
            <small>
            Already registered ?{" "}
              <Link to="/signIn" className="text-primary">
              go to login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;