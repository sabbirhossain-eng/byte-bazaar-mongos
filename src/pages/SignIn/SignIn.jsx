import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from '@mui/icons-material/Lock';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

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
  return (
    <div className="mt-20">
        <div className="text-center mb-4">
            <LockIcon color="primary"/>
            <h3 className="text-2xl font-semibold">Sign in</h3>
            <p>Welcome user, please sign in to continue</p>
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
            <input
              className="btn bg-primary-light"
              type="submit"
              value="Sign In"
            />
          </div>
          <p className="text-center">
            {/* <SocialLogin/> */}
            <small>
              New here?{" "}
              <Link to="/signUp" className="text-primary-light">
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
