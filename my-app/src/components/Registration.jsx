import React, { useState } from "react";
import gymimg from "../assets/images/krish.jpg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Box,
  Select,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"; // Import Axios
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Zod validation schema
const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string()
  .min(6, "Password must be at least 6 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[\W_]/, "Password must contain at least one special character"),
  target: z.string().nonempty("Target is required"),
  activity: z.string().nonempty("Activity is required"),
});

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset, // For resetting the form fields
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData) => {
    console.log(formData.data);
    // try {
    //   const response = await axios.post(
    //     "https://y2dn949cai.execute-api.eu-west-3.amazonaws.com/api/signup",
    //     {
    //       name: formData.name,
    //       email: formData.email,
    //       password: formData.password,
    //       target: formData.target,
    //       preferableActivity: formData.activity,
    //     }
    //   );
    //   console.log("Registration successful:", response.data);
    //   // Handle successful registration (e.g., redirect to login page)
    //   toast.success("Created Account Successfully", {
    //     position: "bottom-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     transition: Bounce,
    //   });
    //   reset(); // For form reset
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 2000);
    // } catch (error) {
    //   console.error("Registration failed:", error.response?.data || error.message);
    //   // Handle registration failure (e.g., show error message to the user)
    //   toast.error(`Registration failed: ${error.response?.data?.message || error.message}`, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };

  
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />

      <Grid container>
        <Grid
          item
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
          md={6.5}
          lg={6.5}
          sx={{ minHeight: "97vh", padding: { xs: 2, md: 4 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "75%", sm: "65%", md: "69%", lg: "60%" },
              padding: 3,
            }}
          >
            <Typography
              sx={{
                fontWeight: 300,
                lineHeight: "24px",
                fontSize: "14px",
                width: "100%",
                textAlign: "left",
                mb: 1,
              }}
            >
              LET'S GET YOU STARTED
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontStyle: "normal",
                lineHeight: "40px",
                fontSize: "24px",
                width: "100%",
                textAlign: "left",
                mb: 1,
              }}
            >
              Create an Account
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
              <TextField
                label="Your Name"
                variant="outlined"
                margin="normal"
                sx={{
                  width: "100%",
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent', // Remove border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent', // Remove border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // Remove border color when focused
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black', // Change label color if needed
                  },
                  '& .MuiInputBase-input': {
                    color: 'black', // Change input text color if needed
                  },
                }}
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />

              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                sx={{ width: "100%" }}
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />

              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                type={showPassword ? "text" : "password"}
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl
                variant="outlined"
                sx={{ width: "100%" }}
                margin="normal"
                error={!!errors.target}
              >
                <InputLabel>Your Target</InputLabel>
                <Controller
                  name="target"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select label="Your Target" {...field}>
                      <MenuItem value="weight_loss">Weight Loss</MenuItem>
                      <MenuItem value="muscle_gain">Muscle Gain</MenuItem>
                      <MenuItem value="flexibility">Flexibility</MenuItem>
                      <MenuItem value="endurance">Endurance</MenuItem>
                    </Select>
                  )}
                />
                {errors.target && (
                  <Typography color="error">{errors.target.message}</Typography>
                )}
              </FormControl>

              <FormControl
                variant="outlined"
                sx={{ width: "100%" }}
                margin="normal"
                error={!!errors.activity}
              >
                <InputLabel>Preferrable Activity</InputLabel>
                <Controller
                  name="activity"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select label="Preferrable Activity" {...field}>
                      <MenuItem value="yoga">Yoga</MenuItem>
                      <MenuItem value="crossfit">CrossFit</MenuItem>
                      <MenuItem value="strength_training">
                        Strength Training
                      </MenuItem>
                      <MenuItem value="cardio">Cardio</MenuItem>
                    </Select>
                  )}
                />
                {errors.activity && (
                  <Typography color="error">
                    {errors.activity.message}
                  </Typography>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "25px",
                  marginBottom: "20px",
                  backgroundColor: "#9EF300",
                  color: "#000000",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#9EF300" },
                  textTransform: "none",
                }}
              >
                Create An Account
              </Button>
            </form>
            <Typography>
              Already have an account?{" "}
              <Typography component={"span"} width={{ md: "block" }}>
                <Link to="/Render">
                  <Typography
                    component={"span"}
                    textDecoration="none"
                    sx={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    LOGIN HERE
                  </Typography>
                </Link>
              </Typography>
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={0}
          md={5.3}
          lg={5.3}
          sx={{
            display: { xs: "none", md: "block" }, // Hide on xs, show on md and lg
            backgroundImage: `url(${gymimg})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
          }}
        >
          <Box
            marginTop={"68%"}
            marginLeft={"8%"}
            marginRight={"8%"}
            marginBottom={"5%"}
            textAlign={"left"}
          >
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#ffffff"}
            >
              “The path to triumph is paved with the{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#9EF300"}
            >
              strength to train hard{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#ffffff"}
            >
              and the perseverance to{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#9EF300"}
            >
              rise each time you fall
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#ffffff"}
            >
              .”
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Registration;
