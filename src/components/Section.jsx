export default function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}


// export const Section = ({ title, children }) => {
//   return (
//     <>
//       <h2>{title}</h2>
//       {children}
//     </>
//   );
// };
