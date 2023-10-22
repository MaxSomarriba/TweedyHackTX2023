from flask import Flask, request, jsonify
import evaluate
import ast

# def get_seperateCaptionList(caption_array):
#     #["Ford", "BMW", "Fiat"]
#     output_list = caption_array
#     return output_list

def get_toxicity(caption_list):
    # caption_list = get_seperateCaptionList(caption_list)
    toxicity_list = toxicity.compute(predictions=caption_list)["toxicity"]
    return toxicity_list

app = Flask(__name__)
toxicity = evaluate.load("toxicity")
@app.route('/run_python_script', methods=['POST'])
def run_python_script():
    data = request.json  # Access the sent data as JSON
    received_data = data.get('data', 'No data received')  # Access the 'data' key

    # Here, you can execute your Python script using 'received_data'
    # result = received_data
    result = get_toxicity(received_data)
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)



    





