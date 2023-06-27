import './style.css';

export function Button ({ operation, label, double, triple, onClick, value }){
  return(
    <>
      <button className={`
        button
        ${operation ? 'operation' : ''}
        ${double ? 'double' : ''}
        ${triple ? 'triple' : ''}
      `}
        onClick={e => onClick && onClick(label)}
        value={value}
      >
        {label}
        </button>
    </>
  );
}