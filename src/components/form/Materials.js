const Input = ({ label, name, value, onChange, type = "text", required = false }) => (
  <div>
    <Label text={label} required={required} />
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md px-4 py-2"
      required={required}
      placeholder=""
    />
  </div>
);

const Select = ({ label, name, value, onChange, options = [], required = false }) => (
  <div>
    <Label text={label} required={required} />
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md px-4 py-2 "
      required={required}
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt[0].toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

const Label = ({ text, required = false }) => (
  <label className="block text-gray-700 font-medium mb-1">
    {text} {required && <span className="text-red-500">*</span>}
  </label>
);

const MediaUpload = () => (
  <div className="mb-6 border border-dashed border-gray-300 rounded-md py-10 flex justify-center">
    <button
      type="button"
      className="text-gray-700 px-6 py-2 border border-gray-300 rounded bg-white hover:bg-gray-100"
    >
      Select Media
    </button>
  </div>
);

const SubmitButton = ({ label }) => (
  <button
    type="submit"
    className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
  >
    {label}
  </button>
);

export { Input, Select, Label, MediaUpload, SubmitButton };
