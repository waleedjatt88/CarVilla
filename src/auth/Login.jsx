import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "", terms: false });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
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
    setTouched({ email: true, password: true });
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        alert("Login successful!");
        setSubmitting(false);
        navigate("/");
      }, 1200);
    }
  };

  const validationErrors = validate();
  const navigate = useNavigate();

  return (
    <div>
      <div className="login-container">
        <div className="login-logo">
          <i className="fas fa-car" />
          <h2>CarVilla</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
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
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="options">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />{" "}
              I agree to the <a href="#">Terms of Service</a>
            </label>
          </div>
          {touched.terms && errors.terms && (
            <span className="error">{errors.terms}</span>
          )}
          <button
            type="submit"
            className="login-btn"
            disabled={submitting || Object.keys(validationErrors).length > 0}
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
          <div>
            <p className="register">
              Don't have an account? <Link to="/signup">Register now</Link>
            </p>
          </div>
          <div className="social-login">
            <p>Or login with</p>
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

export default Login;
