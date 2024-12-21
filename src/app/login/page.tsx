import Link from "next/link";
import "../globals.css";

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-heading">Login</h2>
                <form>
                    <div style={{ marginBottom: "1rem" }}>
                        <label className="login-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="login-input"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label className="login-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="login-input"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p style={{ textAlign: "center", color: "#718096", marginTop: "1rem" }}>
                    Don't have an account?{" "}
                    <Link href="/signup" className="link">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
