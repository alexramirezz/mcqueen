let Izq = 0
let Der = 0
basic.forever(function on_forever() {
    
    Izq = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    Der = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    if (!Der) {
        maqueen.motorRun(100, maqueen.Dir.CW, 30)
    }
    
    if (!Izq) {
        maqueen.motorRun(100, maqueen.Dir.CW, 30)
    }
    
})
