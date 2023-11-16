export default function MainMenu() {
  return (
    <>
      <menu className="flex w-screen justify-end">
        <ul className="flex gap-4 m-4">
          <li>
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </button>
          </li>
          <li>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M6 4v4" />
                <path d="M6 12v8" />
                <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M12 4v10" />
                <path d="M12 18v2" />
                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M18 4v1" />
                <path d="M18 9v11" />
              </svg>
            </button>
          </li>
        </ul>
      </menu>
    </>
  );
}
