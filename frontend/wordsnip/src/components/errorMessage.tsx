const ErrorMessage = ({ requestError }) => {
  return (
    <div
      className="
      mt-4
      flex items-start gap-3
      rounded-xl
      border border-red-200
      bg-red-50
      p-4
      text-red-700
      shadow-sm
    "
    >
      <div className="flex-1">
        <h3 className="font-semibold">Request Failed</h3>
        <p className="mt-1 text-sm text-red-600">{requestError}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
