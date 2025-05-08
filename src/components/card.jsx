export const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded">{children}</div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
