import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(true);
  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  // const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

//   button loading
// function handleClick() {
//     setLoading(true);
//   }
  
  return (
    <div className="mt-20">
        <div className="text-center mb-4">
            <span className="bg-primary p-3 pb-4 rounded-full items-center text-white"><LockOutlinedIcon/></span>
            <h3 className="text-2xl font-semibold mt-4">Sign in</h3>
            <p>Welcome user, please sign in to continue</p>
        </div>
        {/* google facebook button */}
        <div>
            <GoogleAndFacebookLogin/>
        </div>
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto max-h-[100-60vh]">
        <form onSubmit={handleLogin} className="">
          <div className="flex flex-col gap-4">
            <div>
              <TextField
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

          <div className="form-control mt-6">
          <LoadingButton
          size="small"
          endIcon={<SendIcon />}
        //   loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
          </div>
          <p className="text-center text-lg">
            {/* <SocialLogin/> */}
            <small>
              New here?{" "}
              <Link to="/signUp" className="text-primary">
                Create a New Account
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
