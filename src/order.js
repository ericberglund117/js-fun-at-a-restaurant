


























// function takeOrder (order, deliveryOrders) {
// //deliveryOrders.push(order)
// if (deliveryOrders.length < 3) {
//   return deliveryOrders.push(order)
// };
// }

// function refundOrder (order, deliveryOrders) {
//   deliveryOrders.shift(order)
// };

// function listItems (deliveryOrders) {
//   var items = "";
//   for (i = 0; i < deliveryOrders.length; i++) {
//     items += deliveryOrders[i].item
//     if ([i] < 2) {
//       items += ", ";
//     }
//   }
//   return items;
// };

// function searchOrder (deliveryOrders, orderItem) {
// var orderIn = false;
// for (var i = 0; i <deliveryOrders.length; i++) {
//   if (deliveryOrders[i].item.includes(orderItem)) {
//     orderIn = true;
//   }
// };
// return orderIn;
// }
// // var orderItem = deliveryOrders.includes(deliveryOrders.item);
// //     orderItem = true;
// //
// //   for (i = 0; i = deliveryOrders.length; i++) {
// //    if (deliveryOrders.item != orderItem) {
// //        orderItem = false;
// //     }
// //
// //     return orderItem
// //   }
// //};





module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
