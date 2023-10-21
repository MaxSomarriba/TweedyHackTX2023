import evaluate

print("Hello from pyScript.py")

cl1 = ["Hello my name is max", "this is a test"]


def get_toxicity(caption_list):
    toxicity = evaluate.load("toxicity")
    toxicity_list = toxicity.compute(predictions=caption_list)["toxicity"]
    return toxicity_list


print(get_toxicity(cl1))
print("This is a test")
