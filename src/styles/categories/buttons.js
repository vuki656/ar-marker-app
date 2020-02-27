export const button = {
    padding: 20,
    marginBottom: 20,
    borderRadius: 7,
}

export const primary = {
    backgroundColor: "#0089f8",
    width: "70%",

    // iOS Box Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    // Android Box Shadow
    elevation: 6,
}

export const arPrimary = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    alignItems: 'center',
}

export const buttonPrimary = {
    ...button,
    ...primary,
}
