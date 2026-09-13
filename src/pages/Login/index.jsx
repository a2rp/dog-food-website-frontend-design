import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaArrowRight,
    FaEye,
    FaEyeSlash,
    FaLock,
    FaPaw,
    FaRegEnvelope,
    FaShieldHeart,
} from "react-icons/fa6";

import styles from "./styled.module.scss";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <section className={styles.brandSide}>
                    <div className={styles.brandContent}>
                        <NavLink to="/" className={styles.logo}>
                            <span>
                                <FaPaw />
                            </span>
                            Bowl & Bark
                        </NavLink>

                        <div className={styles.brandText}>
                            <span className={styles.label}>Welcome back</span>

                            <h1>Your dog's favorite bowl is waiting.</h1>

                            <p>
                                Sign in to manage meals, delivery preferences
                                and everything that keeps their routine running
                                smoothly.
                            </p>
                        </div>

                        <div className={styles.security}>
                            <FaShieldHeart />

                            <div>
                                <strong>Designed with care</strong>
                                <small>Secure account experience concept</small>
                            </div>
                        </div>
                    </div>

                    <span className={styles.circleOne}></span>
                    <span className={styles.circleTwo}></span>
                </section>

                <section className={styles.formSide}>
                    <div className={styles.formWrapper}>
                        <div className={styles.mobileLogo}>
                            <FaPaw />
                            Bowl & Bark
                        </div>

                        <span className={styles.formLabel}>Member access</span>

                        <h2>Sign in to your account.</h2>

                        <p className={styles.formIntro}>
                            Enter your details below to continue.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <label>
                                <span>Email address</span>

                                <div className={styles.inputWrapper}>
                                    <FaRegEnvelope />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </label>

                            <label>
                                <span>Password</span>

                                <div className={styles.inputWrapper}>
                                    <FaLock />

                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                    />

                                    <button
                                        type="button"
                                        className={styles.passwordButton}
                                        onClick={() =>
                                            setShowPassword(
                                                (current) => !current,
                                            )
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </button>
                                </div>
                            </label>

                            <div className={styles.options}>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>

                                <button type="button" className={styles.forgot}>
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}
                            >
                                Sign in
                                <FaArrowRight />
                            </button>
                        </form>

                        <p className={styles.demoNote}>
                            Frontend demonstration only. Authentication is not
                            connected.
                        </p>

                        <div className={styles.back}>
                            <NavLink to="/">Back to Bowl & Bark</NavLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
