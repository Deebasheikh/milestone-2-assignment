export default function Login() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#F7FAFC' }}>
            <div style={{ width: '100%', maxWidth: '28rem', padding: '2rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#2D3748', marginBottom: '1.5rem' }}>Login</h2>
                <form>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', color: '#4A5568', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }} htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #E2E8F0', borderRadius: '0.5rem', outline: 'none', boxShadow: '0 0 0 2px transparent', transition: 'box-shadow 0.2s' }}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', color: '#4A5568', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }} htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #E2E8F0', borderRadius: '0.5rem', outline: 'none', boxShadow: '0 0 0 2px transparent', transition: 'box-shadow 0.2s' }}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        style={{ width: '100%', backgroundColor: '#4299E1', color: 'white', fontWeight: '600', padding: '0.5rem', borderRadius: '0.5rem', transition: 'background-color 0.3s' }}
                    >
                        Login
                    </button>
                </form>
                <p style={{ textAlign: 'center', color: '#718096', marginTop: '1rem' }}>
                    Don't have an account?{' '}
                    <a href="#" style={{ color: '#4299E1', textDecoration: 'underline' }}>
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}