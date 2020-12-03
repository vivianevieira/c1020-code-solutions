select "customers"."firstName",
        "customers"."lastName",
        "payments"."amount" as "payment"
from "customers"
join "payments" using ("customerId")
limit 10;
