# In turtle, draw the palace, king and queen, place the GOA flag on the tower.


from turtle import *
    

# Painting a castle with king and queen


#step 1:draw a rectangle



speed(0)

bgcolor("skyblue")


penup()
goto(-300,-350)
pendown()


width(5)

color("grey")
begin_fill()
forward(700)
left(90)

forward(400)
left(90)

forward(700)
left(90)

forward(400)
left(90)

forward(250)
left(90)

forward(200)
right(90)



forward(200)
right(90)


forward(200)
right(90)
end_fill()


forward(103)
right(90)

forward(201)




penup()
goto(400,-350)
     
pendown()

color("grey")
begin_fill()
right(90)
forward(200)

left(90)
forward(500)

left(90)
forward(200)

left(90)
forward(100)
end_fill()


penup()
goto(601,150)
pendown()


color("red")
begin_fill()
left(90)
forward(10)




left(125)
forward(200)

left(110)
forward(200)

left(120)
forward(15)
end_fill()


penup()
goto(-300,-350)
pendown()


color("grey")
begin_fill()
right(90)
right(85)
forward(200)

right(90)
forward(500)

right(90)
forward(200)

right(90)
forward(100)

right(90)
end_fill()

penup()
goto(-500,150)
pendown()




color("red")
begin_fill()
forward(10)
right(125)
forward(200)

right(110)
forward(200)


right(120)
forward(15)
end_fill()


right(90)
right(90)

penup()
goto(-80,50)
    
pendown()

color("grey")
begin_fill()
left(85)
forward(200)

right(90)
forward(250)

right(90)
forward(200)
right(90)
end_fill()

penup()
goto(-80,250)
pendown()




forward(10)
color("red")
begin_fill()
right(125)
forward(230)

right(110)
forward(230)

right(120)
forward(15)
end_fill()


penup()
goto(550,25)
pendown()

color("white")
begin_fill()
right(95)
forward(80)

left(90)
forward(90)

left(90)
forward(80)


left(90)
forward(90)
end_fill()

penup()
goto(-440,30)
pendown()

color("white")
begin_fill()
left(90)
forward(80)

right(90)
forward(90)

right(90)
forward(80)

right(90)
forward(90)

right(90)
right(90)
end_fill()

penup()
goto(-10,100)
pendown()

color("white")
begin_fill()
left(90)
forward(100)

right(90)
forward(100)

right(90)
forward(100)

right(90)
forward(100)
end_fill()


right(90)
forward(50)

right(90)
forward(100)


right(90)
forward(50)

right(90)
forward(50)

right(90)
forward(100)


right(90)
right(90)
left(90)


# drawing a grass

penup()
goto(-835,-350)
pendown()


color("green")
begin_fill()


forward(1660)
right(90)

forward(130)
right(90)

forward(1660)
right(90)
forward(130)


end_fill()
# end of grass

penup()
goto(325,-420)
pendown()


color("brown")
begin_fill()
right(90)
forward(40)

left(90)
forward(20)

left(90)
forward(40)

right(90)
forward(80)

left(90)
forward(70)

left(90)
forward(80)

right(90)
forward(40)

left(90)
forward(20)

left(90)
forward(60)

left(90)
forward(60)

right(90)
forward(25)

right(90)
forward(60)

left(90)
forward(25)
end_fill()
#end of legs

penup()
goto(700,360)
pendown()

color("yellow")
begin_fill()

circle(60)

end_fill()
#end of the sun

penup()
goto(330,-315)
pendown()

color("blue")
begin_fill()
left(90)
forward(100)

left(90)
forward(75)

left(90)
forward(100)

left(90)
forward(75)

end_fill()

color("blue")
begin_fill()
left(90)
forward(75)

right(120)
forward(50)

right(90)
forward(15)

right(90)
forward(50)

end_fill()



right(90)
right(90)
forward(60)
color("tan")
begin_fill()
left(90)
forward(15)

left(90)
forward(10)

left(90)
forward(15)

left(90)
forward(10)
left(30)


end_fill()
#end of hand

penup()
goto(295,-215)
pendown()

color("tan")
begin_fill()


circle(30)

end_fill()

#end of head

color("black")

penup()
goto(280,-180)
pendown()

circle(2)

penup()
goto(310,-180)
pendown()

circle(2)


color("brown")

penup()
goto(290,-190)
pendown()


left(45)
forward(10)

penup()
goto(280,-200)
pendown()

left(90)
right(90)
right(90)
circle(20,90)

left(45)

penup()
goto(265,-160)
pendown()
color("yellow")
begin_fill()
forward(30)
right(140)
forward(20)

left(100)
forward(20)

right(100)
forward(20)

left(100)
forward(20)

right(45)
right(45)
right(45)
forward(30)

right(95)
forward(50)
end_fill()


penup()
goto(330,-315)
pendown()

color("blue")

forward(75)
right(90)

forward(75)

color("blue")
begin_fill()
right(90)


left(120)
forward(50)

left(90)
forward(15)

left(90)
forward(50)

end_fill()


left(90)
left(90)
forward(60)
color("tan")
begin_fill()
right(90)
forward(15)

right(90)
forward(10)

right(90)
forward(15)

right(90)
forward(10)
right(30)

end_fill()
      
exitonclick()