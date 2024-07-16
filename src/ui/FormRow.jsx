function FormRow({ label, error, children }) {
  return (
    <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 border-b last:border-none first:pt-0 last:pb-0">
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
}

export default FormRow;
