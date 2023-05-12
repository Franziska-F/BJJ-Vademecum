

export default function Login() {


  return (
<>
     <h2 className="text-center text-2xl my-10 md:my-14 ">login</h2>
      <div className="bg-fight-pink">
        <div className="flex items-center flex-col">
          <label htmlFor="username" className="block">
            username{' '}
          </label>
          <input
            id="username"
            className=" border border-black rounded focus:border-blue-400 py-2 px-3 w-1/3 m-4"
            placeholder="username"
            value="X"
           // onChange={(event) => {
           //   setUsername(event.currentTarget.value);
           // }}
          />
          <label htmlFor="password">password </label>
          <input
            id="password"
            className=" border border-black rounded focus:border-blue-400 py-2 px-3 w-1/3 m-4"
            placeholder="password"
            value="X"
            type="password"
          //  onChange={(event) => {
          //    setPassword(event.currentTarget.value);
          //  }}
          />

          <button
            className="bg-black w-1/4 text-sm p-2 mt-4 text-white rounded"
           // onClick={() => loginHandler()}
          >
            login
          </button>
          </div>
          </div>
          </>

  );
}