import { useAppContext } from "../context/appContext";

const Setting = () => {
    const [state, dispatch] = useAppContext();
    return (
        <div>
            <input
                type="text"
                onChange={(e) =>
                    dispatch({
                        type: "updateUser",
                        payload: { ...state.user, nama: e.target.value },
                    })
                }
                value={state.user.nama}
            />
        </div>
    );
};

export default Setting;
