let Izq = 0
let Der = 0
basic.forever(function () {
    Izq = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    Der = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (Izq) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (Der) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else {
    	
    }
})
