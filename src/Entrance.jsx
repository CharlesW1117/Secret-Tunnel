import { useAuth } from "./AuthContext";
import { useState } from "react";

/** Users can enter their name to receive a token from the API. */
export default function Entrance() {
  // TODO: call signup when form is submitted
  const { signup } = useAuth();
  const [isTyping, setIsTyping] = useState(false);

  async function handleSignup(formData) {
    const username = formData.get("name");
    signup(username);
  }

  return (
    <>
      <h1>Cave Entrance</h1>
      <p>Your journey has brought you to the base of a rocky mountain.</p>
      <p>
        The quickest path forward is through the mountain&apos;s winding
        tunnels, but a sturdy metal gate sits closed before you.
      </p>
      <p>
        Two giant badgers stand guard on either side of the gate, their eyes
        fixed on you. The one on the left opens its mouth, and with a deep,
        rumbling voice, it asks, &quot;Who approaches? Speak your name.&quot;
      </p>
      <div className={`badgers ${isTyping ? "active" : ""}`}>
        <img
          src="/honey-badger-left.png"
          alt="Left badger"
          className="badger left"
        />
        <img
          src="/honey-badger-right.png"
          alt="Right badger"
          className="badger right"
        />
      </div>
      <form
        action={handleSignup}
        onInput={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
      >
        <label>
          Name
          <input name="name" />
        </label>
        <button>Respond</button>
      </form>
    </>
  );
}
//When we type a name and click Respond, the app sends a POST /signup request, stores the token, and moves location to "TABLET".
