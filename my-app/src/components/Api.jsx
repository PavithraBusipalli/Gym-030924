const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "https://x3tdlqbyn5.execute-api.eu-west-3.amazonaws.com/api/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          target: formData.target,
          preferableActivity: formData.activity,
        }
      );
      console.log("Registration successful:", response.data);
      // Handle successful registration (e.g., redirect to login page)
      toast.success("Registration successful!", {
      position: toast.POSITION.TOP_RIGHT,
      });
      reset(); // For form reset
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      // Handle registration failure (e.g., show error message to the user)
      toast.error(`Registration failed: ${error.response?.data?.message || error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
