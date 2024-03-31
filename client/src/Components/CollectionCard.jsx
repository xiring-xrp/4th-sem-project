
function CollectionCard({ data }) {

    return (
        <div className="flex items-center bg-[#2e3138] h-[100vh] ">

            <div className="card w-96 glass">
                <figure>
                    <img src="https://www.mykingandbay.com/files/king-and-bay-custom-clothing-groom-suit-tuxedo.png" alt="Suits"/>
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary"> Suits </button>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default CollectionCard;