import styles from "./PolyVisualizer.module.css";

export function PolyVisualizer() {
  return (
    <div className="w-screen flex flex-row justify-center pt-6">
      <div className="w-1/2 h-[200px] bg-[#77AF9C]">
        <div className="h-[100px] px-2 text-4xl border-b border-white">
          1 3 4
        </div>
        <div className={styles.line}></div>
      </div>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
