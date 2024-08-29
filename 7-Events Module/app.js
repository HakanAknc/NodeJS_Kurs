const EventEmitter = require('events');
const emitter = new EventEmitter();

// listener kayıt et
emitter.on('connection', function(){
    console.log('bağlantı kuruldu.');
});

// event'i tetikle
emitter.emit('connection');
