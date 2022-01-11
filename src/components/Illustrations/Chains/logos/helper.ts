export const getSize = (size: "xs" | "s" | "m" | "l" | "xl") => {
    switch (size) {
        case "xs":
            return {height: "50", width: "20"}
        case "s":
            return {height: "75", width: "30"}
        case "l":
            return {height: "125", width: "50"}
        case "xl":
            return {height: "150", width: "60"}
        default:
            return  {height: "100", width: "40"}
    }
}