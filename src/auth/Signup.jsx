import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!form.terms) newErrors.terms = "You must agree to terms";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true,
      terms: true,
    });
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);

      setTimeout(() => {
        alert("Signup successful!");
        setSubmitting(false);
        navigate("/login");
      }, 1200);
    }
  };
  const navigate = useNavigate();

  const validationErrors = validate();

  return (
    <div>
      <div className="signup-container">
        <div className="logo1">
          <i className="fas fa-car" />
          <h2>CarVilla</h2>
        </div>
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="name-fields">
            <div className="input-group">
              <i className="fa-regular fa-user" style={{ color: "#0c7ed4" }} />
              <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.firstName && errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="input-group">
              <i className="fa-regular fa-user" style={{ color: "#0c7ed4" }} />
              <input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.lastName && errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="input-group">
            <i
              className="fa-regular fa-envelope"
              style={{ color: "#0c7ed4" }}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <div className="input-group">
            <i className="fa-solid fa-lock" style={{ color: "#0299d9" }} />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create Password"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="input-group">
            <i className="fa-solid fa-lock" style={{ color: "#0299d9" }} />
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
            {touched.terms && errors.terms && (
              <span className="error" style={{ display: "block" }}>
                {errors.terms}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="signup-btn"
            disabled={submitting || Object.keys(validationErrors).length > 0}
          >
            {submitting ? "Creating..." : "Create Account"}
          </button>
          <div>
            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="social-signup">
            <p>Or sign up with</p>
            <div className="social-icons">
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="google">
                <i className="fab fa-google" />
              </a>
              <a href="#" className="twitter">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
