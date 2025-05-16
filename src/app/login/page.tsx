
export default function Login() {
    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mt-8">Login</h1>
            <form className="flex flex-col items-center mt-8">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-black-300 rounded mt-6"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-black-300 rounded mt-6"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded mt-6 hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );  
}