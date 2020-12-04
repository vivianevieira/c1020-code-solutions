select count("films".*) as "totalFilms",
       "cat"."name" as "category"
from "actors" as "a"
join "castMembers" using ("actorId")
join "films" using ("filmId")
join "filmCategory" using ("filmId")
join "categories" as "cat" using ("categoryId")
where "a"."firstName" = 'Lisa'
and "a". "lastName" = 'Monroe'
group by "cat"."name"
order by "cat"."name";
