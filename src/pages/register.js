import Link from "next/link"

const register = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-row-reverse shadow-lg shadow-secondary-100 w-1/2 bg-white rounded-xl overflow-hidden">
        <div className="register flex flex-1 flex-col gap-8 py-16 px-8 text-white text-center">
          <h4 className="font-bold text-4xl">New User?</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laudantium voluptates pariatur enim, sequi mollitia ipsa, odio inventore reprehenderit ratione necessitatibus reiciendis quod?
          </p>
          <p>
            <span>Already have an account?</span>
          </p>
          <Link href="/login" className="block w-1/2 mx-auto btn btn-secondary-200-inverse">Login</Link>
        </div>                        
        <div className="flex flex-1 flex-col gap-12 py-16 px-8">
          <h4 className="text-2xl text-center text-secondary-200">Create a <br/> <span className="font-bold">Phunbubble</span></h4>
          <form>
            <div className="mb-8">
                <input type="text" name="username" id="userName" placeholder="Choose a username" className="form-control"/>
            </div>
            <div className="mb-8">
              <input type="email" placeholder="Enter your email address" className="form-control"/>
            </div>
            <div className="mb-8">
              <input type="password" name="password_field" id="password" placeholder="Your unique key" className="form-control"/>
            </div>
            <div className="mb-8">
              <input type="password" name="password_field2" id="password2" placeholder="Confirm your unique key" className="form-control"/>
            </div>
            <div className="mb-8 text-sm">
              <input type="checkbox" name="" id="accept" className="form-check-secondary"/>
              <label htmlFor="accept" className="form-check-label">
                By signing up, you agree to our <span>terms and conditions</span>
              </label>
            </div>
            <button type="submit" className="block w-full btn btn-secondary-200">Register</button>
          </form>
        </div>
      </div>                                                               
    </main>
  )
}

export default register
