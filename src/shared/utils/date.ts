export function formatDate(dateValue: string | Date | number): string {
    if (!dateValue) return '';
  
    const date = new Date(dateValue);
  
    if (isNaN(date.getTime())) return '';
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
  
    return `${day}.${month}.${year}`;
  }