"use strict";
// type AttackType =  "Magical" | "Phisical"
Object.defineProperty(exports, "__esModule", { value: true });
// function calculateDamage(baseDamage:number, targetArmor:number, attackType:AttackType):number{
// if(attackType ==="Magical")
//  {
//     return baseDamage;
// }
// else{
//     const yron = baseDamage - targetArmor
//     if(yron<0)
//     {
//         return 0
//     }
//     else { return baseDamage - targetArmor}
// }}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Processing"] = 0] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivert"] = 2] = "Delivert";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getClientNotification(status) {
    switch (status) {
        case OrderStatus.Processing:
            return "Ваш заказ собирается";
            break;
        case OrderStatus.Shipped:
            return "Заказ передан в доставку";
            break;
        case OrderStatus.Delivert:
            return "Заказ успешно доставлен";
            break;
        case OrderStatus.Cancelled:
            return "Заказ отменён";
            break;
        default: return "Статус неизвестен. Обратитесь в поддержку";
    }
}
console.log(getClientNotification(OrderStatus.Cancelled));
