select "films"."releaseYear",
"categories"."name" as "catagory"
from "films"
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "title" = 'Boogie Amelie'
