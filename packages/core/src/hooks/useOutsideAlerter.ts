import { useState, useEffect, useRef } from 'react';

export function useOutsideAlerter(defaultValue: boolean) {
  const [isInsideElementClick, setIsInsideElementClick] = useState(
    defaultValue
  );
  const outsideAlerterRef = useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsInsideElementClick(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (outsideAlerterRef.current && !outsideAlerterRef.current.contains(event.target as HTMLDivElement)) {
      setIsInsideElementClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { outsideAlerterRef, isInsideElementClick, setIsInsideElementClick };
}