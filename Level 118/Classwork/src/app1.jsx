import { useState, useEffect } from "react";

function NameSearchList() {
  const names = [
    "საბა",
    "ნინო",
    "ლუკა",
    "ანი",
    "გიორგი",
    "მარიამი",
    "დავითი",
    "ელენე",
    "ნიკოლოზი",
    "თამარი"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNames, setFilteredNames] = useState(names);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredNames(names);
    } else {
      const filtered = names.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNames(filtered);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="სახელის ძიება..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameSearchList;
