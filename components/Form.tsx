import { Button } from './ui/Button';

const Form = () => {
  return (
    <form className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700"
        >
          Imię
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            className="w-full h-10 px-2 border rounded-md border-neutral-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="surname"
          className="block text-sm font-semibold text-gray-700"
        >
          Nazwisko
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="surname"
            id="surname"
            className="block w-full h-10 px-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          email
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full h-10 px-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-gray-700"
        >
          Firma
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            className="block w-full h-10 px-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700"
        >
          Wiadomość
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block w-full p-2 border rounded-md border-neutral-400 focus:border-blue-600 sm:text-sm"
          ></textarea>
        </div>
      </div>
      <div className="text-right sm:col-span-2">
        <Button>wyślij</Button>
      </div>
    </form>
  );
};

export default Form;