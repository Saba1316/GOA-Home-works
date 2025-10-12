import { useState } from "react";

function isPrimeExpensive(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  let result = true;
  for (let i = 2; i < num; i++) {
    for (let j = 0; j < 10000; j++) {
      Math.sqrt(j);
    }

    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

export function PrimeChecker() {
  
  const [text, setText] = useState("");

  // მეორე input-ის მდგომარეობა (რიცხვი)
  const [num, setNum] = useState("");

  
  const isPrime =
    num !== "" ? isPrimeExpensive(parseInt(num)) : null;

  // ტექსტის ცვლილება
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // რიცხვის ცვლილება
  const handleNumChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Prime Number Checker</h2>

      {/* პირველი input */}
      <div style={{ marginBottom: "15px" }}>
        <label>Enter text: </label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
        />
        <p>Current text: {text}</p>
      </div>

      {/* მეორე input */}
      <div>
        <label>Enter number: </label>
        <input
          type="number"
          value={num}
          onChange={handleNumChange}
        />
        {num !== "" && (
          <p>
            {num} is {isPrime ? "prime" : "not prime"}
          </p>
        )}
      </div>
    </div>
  );
}

/*
React Profiler-:
-------------------------------------------
თუ გახსნი React DevTools → "Profiler" tab-ს
და ჩაწერ აქ რაიმე ტექსტს პირველ input-ში,
დაინახავ, რომ კომპონენტი ყოველ ასო ცვლილებაზე თავიდან იანგარიშებს
isPrimeExpensive(num)-ს.

მიზეზი: ყოველ render-ზე ის ფუნქცია თავიდან იძახება,
თუმცა `num` არ შეცვლილა — ანუ ითვლება უსარგებლოდ.

ეს არის performance-ის პრობლემა (CPU-intensive calculation),
რადგან React ყოველ ცვლილებაზე აკეთებს ძალიან ბევრ გამოთვლას.

გამოსავალი:
შეგვიძლია გამოვიყენოთ `useMemo` რათა ის მხოლოდ მაშინ გამოითვალოს,
როცა `num` შეიცვლება:

const isPrime = useMemo(() => {
   return num !== "" ? isPrimeExpensive(parseInt(num)) : null;
}, [num]);

ასე, ტექსტის შეცვლისას აღარ მოხდება ზედმეტი გამოთვლა.
*/
