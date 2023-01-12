import whisper

model = whisper.load_model('base')
result = model.transcribe('sample1.m4a',fp16 = False)

print(result['text'])