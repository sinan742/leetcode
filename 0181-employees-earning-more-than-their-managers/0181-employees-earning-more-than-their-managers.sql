# Write your MySQL query statement below
Select E1.Name as Employee
from Employee E1,Employee E2
where E1.ManagerId = E2.id
and E1.Salary > E2.Salary