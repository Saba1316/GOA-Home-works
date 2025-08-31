// Codewars 6 kyu: Meeting


const meeting = s => {
  return s.toUpperCase()
         .replace(/(\w+):(\w+)/g, "($2, $1)")
         .split(';')
         .sort()
         .join('')
};