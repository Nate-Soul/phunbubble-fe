import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import Link from "next/link";

const Login = () => {

  const {login} = useContext(AuthContext)

  const handleLogin = () => {
    login();
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex shadow-lg shadow-secondary-100 w-1/2 bg-white rounded-xl overflow-hidden">
        <div className="login flex flex-1 flex-col gap-8 py-16 px-8 text-white text-center">
          <h4 className="font-bold text-4xl">Welcome Back!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laudantium voluptates pariatur enim, sequi mollitia ipsa, odio inventore reprehenderit ratione necessitatibus reiciendis quod?
          </p>
          <p>
            <span>Don't have an account?</span>
          </p>
          <Link href="/register" className="block w-1/2 mx-auto btn btn-secondary-200-inverse">Register</Link>
        </div>                        
        <div className="flex flex-1 flex-col gap-12 py-16 px-8">
          <h4 className="font-bold text-2xl text-secondary-200">Login</h4>
          <form>
            <div className="mb-8">
              <input type="email" placeholder="Enter your username or email address" className="form-control"/>
            </div>
            <div className="mb-8">
              <input type="password" name="password_field" id="password" placeholder="Your unique key" className="form-control"/>
            </div>
            <div className="mb-8 flex items-center justify-between text-sm">
              <div className="form-check-group">
                <input type="checkbox" name="" id="remember" className="form-check-secondary"/>
                <label htmlFor="remember" className="form-check-label">Keep me logged in</label>
              </div>
              <span>Forgotten Password?</span>
            </div>
            <button type="submit" className="block w-full btn btn-secondary-200" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>                                                               
    </main>
  )
}

export default Login